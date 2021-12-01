import { Flex } from "@chakra-ui/react";
import Attractive from "../components/Attractive";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Attractive />

    </Flex>
  )
}
