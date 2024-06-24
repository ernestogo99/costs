import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Message = ({ msg }) => {
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setvisible(false);
      return;
    }
    setvisible(true);
    const timer = setTimeout(() => {
      setvisible(false);
    }, 3000);
    //encerrando a seção
    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <Box
          sx={{
            width: "100%",
            padding: "1em",
            border: "1px solid #000",
            textAlign: "center",
            mb: "2em",
            borderRadius: "5px",
          }}
        >
          {msg}
        </Box>
      )}
    </>
  );
};

export default Message;
