import { Box, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import banner from "../../assets/banner.png";
import bannerMobile from "../../assets/bannerMobile.png";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const smoothScrollTo = (targetId: string, offset = -50, duration = 700) => {
    const el = document.getElementById(targetId);

    if (!el) return;

    const start = window.pageYOffset;

    const target = el.getBoundingClientRect().top + window.pageYOffset + offset;

    const startTime = performance.now();

    const easeInOut = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      const ease = easeInOut(progress);

      window.scrollTo(0, start + (target - start) * ease);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

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
      minH={{ base: "75vh", md: "100vh" }}
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
        bottom={{ base: "12vh", md: "170px" }}
        left="20px"
        direction="column"
        gap={3}
        w={{ base: "80%", md: "70%" }}
        maxW="300px"
        zIndex="2"
      >
        <Button
          size="md"
          w={{ base: "80%", md: "70%" }}
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
          w={{ base: "80%", md: "70%" }}
          borderRadius="14px"
          bg="whiteAlpha.200"
          backdropFilter="blur(10px)"
          color="white"
          border="1px solid rgba(255,255,255,0.4)"
          _hover={{ bg: "whiteAlpha.300" }}
          onClick={() => smoothScrollTo("menu")}
        >
          Pogledaj meni
        </Button>
      </Flex>
    </Box>
  );
}
