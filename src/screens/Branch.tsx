import {
  Autocomplete,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Header from "../components/Header";
import BranchModel from "../models/Branch";
import flags from "../flags";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Routes, Route, useParams } from "react-router-dom";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("rrrrrrrr"),
    phone: yup
      .string()
      .required("phone required")
      .length(5, "should be 5 cars length"),
    code: yup.number(),
    // date: yup.date("should bedate"),
  })
  .required();

export default function Branch() {
  const { id } = useParams();
  const { register, handleSubmit, watch, formState, reset, control } =
    useForm<BranchModel>({
      mode: "onChange",
      resolver: yupResolver(schema),
    });

  useEffect(() => {
    const response = fetch("http://localhost:3000/branches/4")
      .then((response) => response.json())
      .then((data) => reset(data))
      .catch((error) => console.log(error));
    // return () => {
    // }
  }, []);

  const onSubmit: SubmitHandler<BranchModel> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Box m="40px">
      <Header title={`${id} :`} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="grid"
          gap="40px"
          gridTemplateColumns={{
            sm: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          my={8}
        >
          <TextField
            label="Nom"
            {...register("name")}
            error={!!formState.errors.name}
            helperText={formState.errors.name?.message}
          />

          <Controller
            name="code"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Code"
                {...register("code")}
                error={!!formState.errors.code}
                helperText={formState.errors.code?.message}
              />
            )}
          />
        </Box>
        <Divider />
        <Box
          display="grid"
          gap="40px"
          gridTemplateColumns={{
            sm: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          my={8}
        >
          {/* <FormControl>
            <FormControlLabel
              control={<Switch {...register("name")} />}
              label="default"
            />
          </FormControl> */}
          {/* <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="My TextField"
                variant="outlined"
                error={!!formState.errors.name}
                helperText={formState.errors.name?.message}
              />
            )}
          /> */}
          {/* <TextField
            label="Phone"
            {...register("phone")}
            error={!!formState.errors.phone}
            helperText={formState.errors.phone?.message}
          /> */}
          {/* <Controller
            name="code"
            control={control}
            render={({ field: { onChange } }) => (
              <Autocomplete
                options={Object.values(flags)}
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, state) => (
                  <li {...props} key={option.name}>
                    {option.emoji} &nbsp; {option.name}
                  </li>
                )}
                onChange={(e, data) => onChange(data)}
                renderInput={(params) => <TextField label="Code" {...params} />}
              />
            )}
          /> */}

          {/* <Controller
            name="date"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                label="date debut"
                onChange={onChange}
                value={dayjs(value)}
              />
            )}
          ></Controller> */}

          <TextField
            label="Country"
            {...register("location.country")}
            error={!!formState.errors.location?.country}
            helperText={formState.errors.location?.country?.message}
          />
          <TextField
            label="Wilaya"
            {...register("location.wilaya")}
            error={!!formState.errors.location?.wilaya}
            helperText={formState.errors.location?.wilaya?.message}
          />
        </Box>
        {formState.isDirty && (
          <Box display="flex" justifyContent="end" mt="50px">
            <Button onClick={() => reset()} color="primary" variant="contained">
              cancel
            </Button>
            <Button type="submit" color="secondary" variant="contained">
              save
            </Button>
          </Box>
        )}
      </form>
    </Box>
  );
}
