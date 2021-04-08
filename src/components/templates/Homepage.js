import { PeopleFavorite, StaffStoreCustomer, StartYourDayWithCoffee, VisitOurStoreOnTheMapBelow, WeProvideGoodCoffee } from '../organisme'
import { Footer } from './'

export default function Homepage(){
   return(
      <div>
         <StartYourDayWithCoffee/>
         <StaffStoreCustomer/>
         <WeProvideGoodCoffee/>
         <PeopleFavorite/>
         <VisitOurStoreOnTheMapBelow/>
         <Footer/>
      </div>
   )
}