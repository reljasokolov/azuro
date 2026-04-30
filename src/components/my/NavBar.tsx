import {
  Box,
  Flex,
  HStack,
  Text,
  Button,
  Icon,
  Drawer,
  Portal,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LuPhone, LuMail, LuMapPin, LuClock, LuMenu } from "react-icons/lu";

export default function NavBar() {
  const navigate = useNavigate();
  const { open, onOpen, onClose } = useDisclosure();

  const smoothScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      bg="rgba(255,255,255,0.7)"
      backdropFilter="blur(14px)"
      borderBottom="1px solid"
      borderColor="blackAlpha.100"
    >
      <Box display={{ base: "none", md: "block" }}>
        <Flex bg="blue.500" px="8" py="2" justify="center">
          <HStack gap="8" fontSize="sm">
            <HStack>
              <Icon as={LuPhone} boxSize="14px" />
              <Text>010-360-292</Text>
            </HStack>

            <HStack>
              <Icon as={LuMapPin} boxSize="14px" />
              <Text>Dimitrovgrad, Srbija</Text>
            </HStack>

            <HStack>
              <Icon as={LuClock} boxSize="14px" />
              <Text>Pon-Ned 07.00-00.00</Text>
            </HStack>
          </HStack>
        </Flex>
      </Box>

      <Flex
        px={{ base: 4, md: 8 }}
        py="4"
        align="center"
        justify="space-between"
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          cursor="pointer"
          onClick={() => navigate("/")}
        >
          Azuro Caffe
        </Text>

        <HStack display={{ base: "none", md: "flex" }} gap="8">
          <Text cursor="pointer" onClick={() => navigate("/")}>
            Home
          </Text>
          <Text cursor="pointer" onClick={() => smoothScrollTo("menu")}>
            Menu
          </Text>
          <Text cursor="pointer" onClick={() => smoothScrollTo("about")}>
            About
          </Text>
          <Text cursor="pointer" onClick={() => smoothScrollTo("contact")}>
            Contact
          </Text>
        </HStack>

        <Box
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
          cursor="pointer"
        >
          <Icon as={LuMenu} boxSize="24px" />
        </Box>

        <Button display={{ base: "none", md: "block" }}>Poruči odmah</Button>
      </Flex>

      <Drawer.Root
        open={open}
        onOpenChange={(e) => (e.open ? onOpen() : onClose())}
      >
        <Portal>
          <Drawer.Backdrop />

          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Text fontWeight="bold">Menu</Text>
              </Drawer.Header>

              <Drawer.Body>
                <Flex direction="column" gap={4}>
                  <Text
                    onClick={() => {
                      navigate("/");
                      onClose();
                    }}
                  >
                    Home
                  </Text>
                  <Text
                    onClick={() => {
                      smoothScrollTo("menu");
                      onClose();
                    }}
                  >
                    Menu
                  </Text>
                  <Text
                    onClick={() => {
                      smoothScrollTo("about");
                      onClose();
                    }}
                  >
                    About
                  </Text>
                  <Text
                    onClick={() => {
                      smoothScrollTo("contact");
                      onClose();
                    }}
                  >
                    Contact
                  </Text>
                </Flex>
              </Drawer.Body>

              <Drawer.CloseTrigger asChild>
                <CloseButton position="absolute" top="4" right="4" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
}
