import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import menuData from "../../data/menu.json";

const { food } = menuData;

export default function MenuSection() {
  const primaryMap = menuData.primaryMap as Record<string, string[]>;

  const [primary, setPrimary] = useState("Doručak");
  const [secondary, setSecondary] = useState<string | null>(null);

  const filtered = food.filter((item: any) => {
    if (secondary) {
      return item.category === secondary || item.subcategory === secondary;
    }

    const allowed = primaryMap[primary] || [];

    return (
      allowed.includes(item.category) ||
      allowed.includes(item.subcategory || "")
    );
  });

  return (
    <Box bg="#093C5D" py={20} px={6} id="menu">
      <Box maxW="1100px" mx="auto">
        <Text fontSize="32px" fontWeight="bold" mb={6} color="white">
          Meni
        </Text>

        <Box position="sticky" top="0" zIndex={10} bg="#093C5D" pb={3}>
          <Box position="relative">
            <Box
              position="absolute"
              left="0"
              top="0"
              h="100%"
              w="30px"
              bg="linear-gradient(to right, #093C5D, transparent)"
              zIndex={2}
              pointerEvents="none"
            />

            <Box
              display="flex"
              gap={3}
              overflowX="auto"
              px={1}
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
                scrollbarWidth: "none",
              }}
            >
              {[
                "Doručak",
                "Obroci",
                "Prilozi & Salate",
                "Deserti",
                "Pića",
                "Žestoka Pića",
                "Piva & Vina",
                "Viski",
                "Rakija",
              ].map((cat) => (
                <Button
                  key={cat}
                  onClick={() => {
                    setPrimary(cat);
                    setSecondary(null);
                  }}
                  px={6}
                  py={3}
                  borderRadius="full"
                  fontWeight="600"
                  fontSize="sm"
                  whiteSpace="nowrap"
                  flexShrink={0}
                  bg={primary === cat ? "#5ba3de" : "rgba(255,255,255,0.05)"}
                  color={primary === cat ? "#000" : "#fff"}
                  border="1px solid rgba(255,255,255,0.15)"
                  style={{ scrollSnapAlign: "start" }}
                  _hover={{
                    bg: primary === cat ? "#5ba3de" : "rgba(255,255,255,0.1)",
                  }}
                >
                  {cat}
                </Button>
              ))}
            </Box>

            <Box
              position="absolute"
              right="0"
              top="0"
              h="100%"
              w="30px"
              bg="linear-gradient(to left, #093C5D, transparent)"
              zIndex={2}
              pointerEvents="none"
            />
          </Box>

          {primaryMap[primary]?.length > 0 && (
            <Box position="relative" mt={3}>
              <Box
                position="absolute"
                left="0"
                top="0"
                h="100%"
                w="30px"
                bg="linear-gradient(to right, #093C5D, transparent)"
                zIndex={2}
                pointerEvents="none"
              />

              <Box
                display="flex"
                gap={2}
                overflowX="auto"
                px={1}
                style={{
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                }}
              >
                {primaryMap[primary].map((sub) => (
                  <Button
                    key={sub}
                    size="sm"
                    onClick={() => setSecondary(sub)}
                    px={4}
                    py={1.5}
                    borderRadius="full"
                    fontSize="xs"
                    whiteSpace="nowrap"
                    flexShrink={0}
                    bg={secondary === sub ? "#5ba3de" : "transparent"}
                    color={secondary === sub ? "#000" : "#fff"}
                    border="1px solid rgba(255,255,255,0.15)"
                    style={{ scrollSnapAlign: "start" }}
                    _hover={{
                      bg: "whiteAlpha.200",
                    }}
                  >
                    {sub}
                  </Button>
                ))}
              </Box>

              <Box
                position="absolute"
                right="0"
                top="0"
                h="100%"
                w="30px"
                bg="linear-gradient(to left, #093C5D, transparent)"
                zIndex={2}
                pointerEvents="none"
              />
            </Box>
          )}
        </Box>

        <Text fontSize="22px" fontWeight="600" color="white" mt={6} mb={2}>
          {secondary || primary}
        </Text>

        <Box w="60px" h="2px" bg="yellow.400" borderRadius="full" mb={8} />

        <Box
          key={secondary || primary}
          animation="fadeIn 0.35s ease"
          display="grid"
          gridTemplateColumns={{
            base: "1fr 1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
          gap={8}
        >
          {filtered.map((item: any, i: number) => (
            <Box
              key={i}
              bg="linear-gradient(160deg, #3B7597, #2a5b74)"
              borderRadius="22px"
              p={{ base: 4, md: 6 }}
              boxShadow="0 12px 30px rgba(0,0,0,0.25)"
              border="1px solid rgba(255,255,255,0.08)"
              transition="0.3s"
              _hover={{
                transform: "translateY(-5px)",
              }}
            >
              <Text color="white" fontWeight="600" mb={1}>
                {item.name}
              </Text>

              {item.desc && (
                <Text fontSize="xs" color="whiteAlpha.700" mb={2}>
                  {item.desc}
                </Text>
              )}

              <Text color="yellow.300" fontWeight="bold">
                {item.price}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
}
