export default function RootFooter(){
    const current_year = new Date().getFullYear()
    return (
        <footer className="bg-background py-6">
          <div className="container mx-auto text-center">
                <p>&copy; {current_year} Salama360. All rights reserved.</p>
          </div>
        </footer>
    )
}