import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { style } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { max } from "date-fns";

export default function BookForm({ onSubmit, initialData = {} }) {
  const curentDay = new Date();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: initialData,
  });
  useEffect(() => {
    register("startDate");
    register("endDate");
  }, [register]);

  return (
    <Grid container justifyContent="center" xs={10}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ marginBottom: 20, width: 400 }}
      >
        <div className="form-group" style={{ width: "100%" }}>
          <TextField
            id="name"
            label="Tên sách"
            variant="outlined"
            {...register("name")}
            style={{ marginBottom: 20, width: 400  }}
          />
        </div>
        <div className="form-group" style={{ width: "100%" }}>
          <TextField
            id="image"
            label="Đường dẫn ảnh"
            variant="outlined"
            {...register("image")}
            style={{ marginBottom: 20, width: 400  }}
          />
        </div>
        <div className="form-group" style={{ width: "100%" }}>
          <TextField
            id="description"
            label="Mô tả"
            variant="outlined"
            {...register("description")}
            style={{ marginBottom: 20, width: 400  }}
          />
        </div>
        <div className="form-group" style={{ width: "100%" }}>
          <TextField
            id="price"
            label="Gía (USD)"
            variant="outlined"
            {...register("price")}
            style={{ marginBottom: 20, width: 400  }}
          />
        </div>
        <div className="form-group" style={{ width: "100%" }}>
          <TextField
            id="quantity"
            label="Số lượng"
            variant="outlined"
            {...register("quantity")}
            style={{ marginBottom: 20, width: 400  }}
          />
        </div>
        <div className="form-group" style={{ width: "100%" }}>
          <TextField
            id="publicationDate"
            label="Ngày tạo"
            type="date"
            defaultValue="2022-11-16"
            {...register("publicationDate")}
            style={{ marginBottom: 20, width: 400  }}
          />
        </div>
        <div className="form-group">
          <TextField
            id="page"
            label="Số lượng trang trong sách"
            variant="outlined"
            {...register("page")}
            style={{ marginBottom: 20, width: 400  }}
          />
        </div>
        <Button variant="outlined" type="submit">
          Create
        </Button>
      </form>
    </Grid>
  );
}
