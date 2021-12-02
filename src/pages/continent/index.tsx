import { Flex } from "@chakra-ui/react";
import ContinentBanner from "../../components/ContinentBanner";
import Header from "../../components/Header";

export default function Continet() {
    return(
        <Flex direction="column">
            <Header />
            <ContinentBanner />
        </Flex>
    )
}