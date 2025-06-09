"use client"

import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react";

export const useVolunteersLocations = () => {
    const supabase = createClient();

    const [locations, setLocations] = useState([]);

    
        useEffect(() => {

            //get the current locations of the volunteers
            const fetchLocations = async () => {
                const { data, error } = await supabase
                    .from('slm_user_curr_locations')
                    .select('*');

                if (error) {
                    console.error('Error fetching data:', error);
                }

                setLocations(data);
            };

            fetchLocations();

            const channelSubscription = supabase.channel('custom-all-channel')
                .on(
                    'postgres_changes',
                    { event: '*', schema: 'public', table: 'slm_user_curr_locations' },
                    (payload) => {
                        console.log('Change received!', payload)

                        //fetch the updated location details
                        fetchLocations()
                    }
                )
                .subscribe()

                return () => {
                    supabase.removeChannel(channelSubscription)
                }
        }, [])

    return {
        locations
    }
}