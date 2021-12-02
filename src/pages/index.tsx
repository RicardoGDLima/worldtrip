import { Flex, Heading  } from "@chakra-ui/react";
import Separador from "../components/Separador";
import Attractive from "../components/Attractive";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Slider from "../components/Slider"

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Attractive />

      <Separador />

      <Heading textAlign="center" fontWeight="500" mb={["5", "14"]} fontSize={["lg", "3xl", "4xl"]} >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Slider />

    </Flex>
  )
}
