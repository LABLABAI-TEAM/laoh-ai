import React from "react";
import { AppBar, Typography, Container } from "@mui/material";
import {} from "@mui/lab";
import {} from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <AppBar position="fixed" className="top-0">
      <Container maxWidth="xl">
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          <Link href="/">
            <img
              src="/logo.png"
              alt="logo"
              style={{ width: "100px", height: "100px" }}
            />
          </Link>
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Header;
