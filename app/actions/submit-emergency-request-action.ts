// actions.ts

'use server'

import { EmergencyRequestFormSchema } from '@/components/ui/emergency-request-form';
import { createClient } from '@/utils/supabase/server';
import { z } from 'zod'


export const submitEmergencyRequestAction = async (values: z.infer<typeof EmergencyRequestFormSchema>) => {
  const supabase = await createClient();
  // Insert data into Supabase database
  const { data, error } = await supabase.from('slm_emergency_rpts')
    .insert([
      {
        type: values.emergencyType,
        description: values.description,
        location: values.location,
        status: 'pending', // Set default status to pending
        timestamp: new Date(),
      },
    ])

  if (error) {
    return { success: false, message: error.message }
  }

  return { success: true, data }
  
}
