import { Box, Text } from "@chakra-ui/react";

export default function LocationSection() {
  return (
    <Box py={10} px={6} bg="#0b2f47">
      <Box maxW="1100px" mx="auto">
        <Text fontSize="28px" fontWeight="bold" color="white" mb={4}>
          Lokacija
        </Text>
        <Box w="60px" h="3px" bg="yellow.400" borderRadius="full" mb={8} />

        <Text color="whiteAlpha.800" mb={6}>
          Nalazimo se u centru grada. Dođite na najbolji brunch i kafu ☕
        </Text>

        <Box borderRadius="16px" overflow="hidden" boxShadow="lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.292858086635!2d22.7741523!3d43.014222600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475535e607da2a17%3A0x696a9bbe2ab21d25!2sAzuro%20caffe!5e0!3m2!1ssr!2sbg!4v1777653106848!5m2!1ssr!2sbg"
            width="600"
            height="450"
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
}
