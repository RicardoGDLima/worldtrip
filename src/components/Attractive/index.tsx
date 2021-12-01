import { Grid, GridItem } from "@chakra-ui/react";
import Attractive from "./Attractive";

export default function Attractives(){
    return(
       <Grid templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]} w="100%" justifyContent="space-between" align="center" mt={["10", "32"]} mx="auto" maxW="1160px" gap={[1, 5]}>  
           <GridItem>
               <Attractive icon="cocktail" text="vida noturna" />               
           </GridItem>
           <GridItem>
               <Attractive icon="Beach" text="praia" />               
           </GridItem>
           <GridItem>
               <Attractive icon="Building" text="moderno" />               
           </GridItem>
           <GridItem>
               <Attractive icon="Museum" text="clássico" />               
           </GridItem>
           <GridItem colSpan={[2, 2, 2, 1]}>
               <Attractive icon="earth" text="e mail..." />               
           </GridItem>
       </Grid>
    )
}