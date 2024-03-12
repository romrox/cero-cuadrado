import React, { useState, useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import PrimarySearchAppBar from "../../navbar/Navbar";
import { createSvgIcon } from "@mui/material/utils";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { format } from "date-fns";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const columns = [
  { id: "name", label: "Nombre:", minWidth: 170, align: "center" },
  { id: "code", label: "Fecha de Creación:", minWidth: 100, align: "center" },
  {
    id: "population",
    label: "Fecha de Modificación:",
    minWidth: 100,
    align: "center",
  },
  {
    id: "size",
    label: "Acciones",
    minWidth: 100,
    align: "center",
  },
];

function createData(name, code, population, size) {
  return { name, code, population, size };
}

const rows = [
  createData(
    "Troncos del Talar",
    "17 oct. 2023",
    "18 oct. 2023",
    <Box>
      <Button>
        <DeleteIcon />
      </Button>
      <Button>
        <EditIcon />
      </Button>
    </Box>
  ),
];

export default function Porcentajes() {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Restaura el foco del campo de búsqueda después de cada actualización
    inputRef.current.focus();
  }, [searchTerm]);

  const [Porcentajes, setPorcentajes] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = (name) => {
    setNewItemName(name);
    setOpen(true);
    // Al abrir el modal, restablece el valor del nombre del nuevo ítem
    //setNewItemName("");
  };
  const handleClose = () => {
    setOpen(false);
    // Al cerrar el modal, restablece el valor del nombre del nuevo ítem
    setNewItemName("");
  };

  const handleOpen2 = () => {
    setOpen2(true);
    // Al abrir el modal, restablece el valor del nombre del nuevo ítem
    setNewPorcentajesName("");
  };
  const handleClose2 = () => {
    setOpen2(false);
    // Al cerrar el modal, restablece el valor del nombre del nuevo ítem
    setNewPorcentajesName("");
  };

  const [selectedItemId, setSelectedItemId] = useState(null);
  const [newItemName, setNewItemName] = useState("");
  const [newPorcentajesName, setNewPorcentajesName] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    background: "#181818",
  };

  useEffect(() => {
    fetch("https://localhost:7244/api/Presupuesto/GetAllPorcentajes")
      .then((response) => response.json())
      .then((data) => setPorcentajes(data))
      .catch((error) => console.error("Error fetching Porcentajes", error));
  }, []);

  const handleDelete = (id) => {
    // Realiza la lógica para eliminar el objeto con el ID proporcionado
    fetch(`https://localhost:7244/api/Presupuesto/DeletePorcentajes?id=${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Actualiza el estado para reflejar el cambio
          setPorcentajes(Porcentajes.filter((item) => item.id !== id));
        } else {
          throw new Error("Error al eliminar Porcentajes");
        }
      })
      .catch((error) => console.error("Error al eliminar Porcentajes:", error));
  };

  const handleEdit = (id, newName) => {
    fetch(
      `https://localhost:7244/api/Presupuesto/PorcentajesUpDate?PorcentajesId=${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newName,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          // Actualiza el estado para reflejar el cambio
          setPorcentajes(
            Porcentajes.map((item) =>
              item.id === id ? { ...item, name: newName } : item
            )
          );
          // Después de la confirmación, restablece el valor del nombre del nuevo ítem
          setNewItemName("");
          // Cierra el modal después de la confirmación
          handleClose();

          // Recarga los datos desde la API para obtener la lista actualizada
          fetch("https://localhost:7244/api/Presupuesto/GetAllPorcentajes")
            .then((response) => response.json())
            .then((data) => setPorcentajes(data))
            .catch((error) =>
              console.error("Error fetching Porcentajes:", error)
            );
        } else {
          throw new Error("Error al actualizar Porcentajes");
        }
      })
      .catch((error) =>
        console.error("Error al actualizar Porcentajes:", error)
      );
  };

  const handleCreate = (newName) => {
    fetch(`https://localhost:7244/api/Presupuesto/Porcentajes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Actualiza el estado para reflejar el cambio
          // Aquí puedes actualizar la lista de centros de costos si es necesario
          // Por ejemplo, volviendo a cargar la lista completa desde el backend
          fetch("https://localhost:7244/api/Presupuesto/GetAllPorcentajes")
            .then((response) => response.json())
            .then((data) => setPorcentajes(data))
            .catch((error) =>
              console.error("Error fetching centros de costos:", error)
            );

          // Después de la confirmación, restablece el valor del nombre del nuevo ítem
          setNewPorcentajesName("");
          // Cierra el modal después de la confirmación
          handleClose();
        } else {
          throw new Error("Error al crear Porcentajes");
        }
      })
      .catch((error) => console.error("Error al crear Porcentajes:", error));
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const PlusIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com/
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>,
    "Plus"
  );

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",

    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "40ch",
      },
    },
  }));

  const formatFecha = (fechaString) => {
    if (!fechaString) return ""; // Devuelve una cadena vacía si la fecha es nula o indefinida
    const fecha = new Date(fechaString);
    return format(fecha, "dd-MM-yyyy");
  };

  return (
    <Paper sx={{ width: "100%", backgroundcolor: "#0b0a0a" }}>
      <PrimarySearchAppBar sx={{ background: " #424242", color: "#fff" }} />
      <TableContainer
        sx={{
          maxHeight: 820,
          minHeight: 820,
          background: " #424242",
          color: "#fff",
        }}
      >
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ background: " #424242", color: "#fff" }}
        >
          <TableHead sx={{ background: " #424242", color: "#fff" }}>
            <TableRow sx={{ background: " #424242", color: "#fff" }}>
              <TableCell
                align="center"
                colSpan={1}
                sx={{ background: " #181818", color: "#fff" }}
              >
                CATALOGO / Porcentajes
              </TableCell>
              <TableCell
                align="center"
                colSpan={2}
                sx={{ background: " #181818", color: "#fff", width: "30%" }}
              >
                <Typography>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      className="search"
                      placeholder="Nombre…"
                      inputProps={{ "aria-label": "search" }}
                      value={searchTerm}
                      onInput={(e) => setSearchTerm(e.target.value)}
                      inputRef={inputRef} // Establece la referencia al campo de búsqueda
                    />
                  </Search>
                </Typography>
              </TableCell>
              <TableCell
                align="right"
                colSpan={2}
                sx={{ background: " #181818", color: "#fff" }}
              >
                <Button
                  style={{ color: "#fff" }}
                  onClick={(e) => handleOpen2()}
                >
                  <PlusIcon />
                </Button>
                <Modal open={open} onClose={handleClose}>
                  <Box sx={style}>
                    <TextField
                      value={newItemName}
                      onChange={(e) => setNewItemName(e.target.value)}
                      margin="normal"
                      fullWidth
                      variant="filled"
                      className="newItemName"
                      name="newItemName"
                      label="Nombre"
                      type="newItemName"
                      id="newItemName"
                      InputLabelProps={{
                        sx: {
                          color: "#fff", // Color blanco para el label
                          "&::after": {
                            borderBottom: "2px solid #d21972",
                          },
                          "&:not(:placeholder-shown)": {
                            color: "#fff", // Color azul cuando el campo tiene texto escrito
                          },
                        },
                      }}
                      InputProps={{
                        sx: {
                          color: "#fff", // Color blanco para el texto dentro del campo de entrada
                          "&::after": {
                            borderBottom: "2px solid #d21972",
                          },

                          "&:not(:placeholder-shown)": {
                            color: "#fff", // Color azul cuando el campo tiene texto escrito
                          },
                        },
                      }}
                    />
                    <Button
                      onClick={() => {
                        handleEdit(selectedItemId, newItemName);
                        handleClose();
                      }}
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, background: "#d2193b" }}
                    >
                      Cofirmar
                    </Button>
                  </Box>
                </Modal>

                <Modal
                  open={open2}
                  onClose={handleClose2}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <TextField
                      value={newPorcentajesName}
                      onChange={(e) => setNewPorcentajesName(e.target.value)}
                      margin="normal"
                      fullWidth
                      variant="filled"
                      className="newPorcentajesName"
                      name="setNewPorcentajesName"
                      type="newPorcentajesName"
                      id="newPorcentajesName"
                      label="Nombre del Impuesto"
                      InputLabelProps={{
                        sx: {
                          color: "#fff",
                          "&::after": {
                            borderBottom: "2px solid #d21972",
                          },
                          "&:not(:placeholder-shown)": {
                            color: "#fff",
                          },
                        },
                      }}
                      InputProps={{
                        sx: {
                          color: "#fff",
                          "&::after": {
                            borderBottom: "2px solid #d21972",
                          },
                          "&:not(:placeholder-shown)": {
                            color: "#fff",
                          },
                        },
                      }}
                    />
                    <Button
                      onClick={() => {
                        handleCreate(newPorcentajesName);
                        handleClose2();
                      }}
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, background: "#d2193b" }}
                    >
                      Confirmar
                    </Button>
                  </Box>
                </Modal>
              </TableCell>
            </TableRow>
            <TableRow sx={{ background: " #424242", color: "#fff" }}>
              {columns.map((column) => (
                <TableCell
                  sx={{ background: " #424242", color: "#fff" }}
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ background: " #424242", color: "#fff" }}>
            {Porcentajes.filter((Porcentajes) =>
              Porcentajes.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((Porcentajes) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={Porcentajes.id}
                >
                  <TableCell
                    sx={{
                      background: " #424242",
                      color: "#fff",
                      textAlign: "righ",
                    }}
                  >
                    {Porcentajes.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      background: " #424242",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    {formatFecha(Porcentajes.data)}
                  </TableCell>
                  <TableCell
                    sx={{
                      background: " #424242",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    {formatFecha(Porcentajes.modifiedDate)}
                  </TableCell>
                  <TableCell align="center">
                    <Box>
                      <Button
                        style={{ color: "#fff" }}
                        onClick={() => handleDelete(Porcentajes.id)}
                      >
                        <DeleteIcon />
                      </Button>
                      <Button
                        style={{ color: "#fff" }}
                        onClick={() => {
                          setSelectedItemId(Porcentajes.id);
                          handleOpen(Porcentajes.name);
                        }}
                      >
                        <EditIcon />
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ background: " #393838", color: "#fff" }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
