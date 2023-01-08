import {
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Drawer,
  List,
  ListItem,
  ListIcon,
  Box,
  useToast,
  IconButton,
} from "@chakra-ui/react";
import { RiMenu2Fill } from "react-icons/ri";

const NavLinks = [
  // {
  //   title: "collections",
  //   url: "",
  // },
  // {
  //   title: "shop",
  //   url: "",
  // },
  // {
  //   title: "campaign",
  //   url: "",
  // },
  // {
  //   title: "calender",
  //   url: "",
  // },
  // {
  //   title: "gallery",
  //   url: "",
  // },
  {
    title: "About",
    url: "",
  },
  {
    title: "Contact",
    url: "",
  },

  {
    title: "Login",
    url: "",
  },
];

const MyDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

function handleSoon() {
  toast (
    {
      title: "Watch out, coming soon!",
      type: "info"
      
    }
  )
}


  return (
    
    <>
      <IconButton
        bgColor={"transparent"}
        _active={{
          background: "transparent",
        }}
        _hover={{
          background: "transparent",
        }}
        onClick={onOpen}
        icon={<RiMenu2Fill color="white" />}
      />

      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <List spacing={3} mt={12}>
              {NavLinks.map((x, i) => (
                <ListItem py={3}
                  key={i}
                  sx={{
                    cursor: "pointer",
                  }}
                  _hover={{ color: "greeen.200" }}
                  onClick= {handleSoon}
                >
                  {/* <ListIcon as={MdCheckCircle} color="green.500" /> */}
                  {x.title}
                </ListItem>
              ))}
            </List>
           
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyDrawer;
