import { Box, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import banner from "../../assets/banner.png";
import bannerMobile from "../../assets/bannerMobile.png";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bg = isMobile ? bannerMobile : banner;

  return (
    <Box
      minH="100vh"
      position="relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: isMobile ? "top center" : "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="rgba(0,0,0,0.25)"
      />

      <Flex
        position="absolute"
        bottom="170px"
        left="20px"
        direction="column"
        gap={3}
        w="80%"
        maxW="300px"
        zIndex="2"
      >
        <Button
          size="md"
          w="70%"
          borderRadius="14px"
          bg="yellow.400"
          color="black"
          fontWeight="600"
          boxShadow="0 6px 20px rgba(0,0,0,0.25)"
          _hover={{ bg: "yellow.300" }}
        >
          Poruči odmah
        </Button>

        <Button
          size="md"
          w="70%"
          borderRadius="14px"
          bg="whiteAlpha.200"
          backdropFilter="blur(10px)"
          color="white"
          border="1px solid rgba(255,255,255,0.4)"
          _hover={{ bg: "whiteAlpha.300" }}
        >
          Pogledaj meni
        </Button>
      </Flex>
    </Box>
  );
}
