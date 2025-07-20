import { Avatar, AvatarGroup } from "@chakra-ui/react";

function Headline() {
  return (
    <>
      <AvatarGroup>
        <Avatar.Root w="300px" h="300px" borderRadius="full" overflow="hidden">
          <Avatar.Fallback bg="gray.00" />{" "}
          <Avatar.Image
            src="/VeronicaProfile.png"
            alt="Profilbild von Veronica"
            objectFit="cover"
          />
        </Avatar.Root>
      </AvatarGroup>
    </>
  );
}

export default Headline;
