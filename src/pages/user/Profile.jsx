import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "calc(100vh - 64px)",
      }}
    >
      <Box
        sx={{
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "140px",
          }}
        >
          <Avatar
            alt="User"
            src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            sx={{ width: 56, height: 56 }}
          />
          <Typography variant="h5">Edward</Typography>
          <Typography variant="body1"> @edwardRamos </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "1rem",
            height: "150px",
          }}
        >
          <Typography variant="body1">
            Últimas 3 mascotas registradas:
          </Typography>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <ListItem>
              <Link
                to="/user/profile"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Mascota 1
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/auth/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Mascota 2
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/auth/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Mascota 3
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "700px",
          height: "450px",
        }}
      >
        <Typography variant="h4">¡Bienvenido Nuevamente Edward!</Typography>
        <Typography variant="body1">
          Aqui podras ver toda la informacion de tu perfil y mascotas
        </Typography>
        <Divider />

        <Typography variant="h5">Registrar Mascota</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          at iusto placeat quisquam, commodi quidem asperiores, delectus
          veritatis excepturi, corrupti voluptas est expedita voluptatibus
          magnam quibusdam! Quam, fugit? Aspernatur, veritatis!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "5rem",
            margin: "1rem 0",
            borderRadius: "0.5rem",
            border: "none",
          }}
          onClick={() => navigate("/user/register-pet")}
        >
          Ir
        </Button>
        <Divider />

        <Typography variant="h5">Ver Tus Mascotas</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab
          reiciendis, ratione ut repellat odio illum natus corporis maiores quae
          nostrum sit eveniet nisi id minima, molestiae quod corrupti dolor.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "5rem",
            margin: "1rem 0",
            borderRadius: "0.5rem",
            border: "none",
          }}
          onClick={() => navigate("/user/pets")}
        >
          Ir
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
