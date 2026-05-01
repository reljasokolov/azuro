import { Box, Image, Text } from "@chakra-ui/react";
import food1 from "../../assets/food1.jpeg";
import food2 from "../../assets/food2.jpeg";
import food3 from "../../assets/food3.jpeg";
import food4 from "../../assets/food4.jpeg";
const images = [food1, food2, food3, food4];

export default function GallerySection() {
  return (
    <Box py={10} px={6} bg="#093C5D">
      <Box maxW="1100px" mx="auto">
        <Text fontSize="28px" fontWeight="bold" color="white" mb={10}>
          Galerija
        </Text>
        src/components/my/Menu.tsx
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          }}
          gap={4}
        >
          {images.map((src, i) => (
            <Box
              key={i}
              overflow="hidden"
              borderRadius="16px"
              _hover={{ transform: "scale(1.05)" }}
              transition="0.3s"
            >
              <Image src={src} w="100%" h="200px" objectFit="cover" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
