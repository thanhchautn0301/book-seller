import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { style } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { max } from "date-fns";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useGetAuthor} from "../../actions/author";
import {useGetTopic} from "../../actions/topic";

export default function BookForm({ onSubmit, initialData = {}, authors, topics }) {
  const { register, handleSubmit, setValue,getValues } = useForm({
    defaultValues: initialData,
  });
  const [authorInit, setAuthorInit] = useState(getValues("authorEntity.id"))
  const [topicInit, setTopicInit] = useState(getValues("topicEntity.id"))
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
            required={true}
          />
        </div>
        <div className="form-group" style={{ width: "100%" }}>
          <TextField
            id="price"
            label="Gía (USD)"
            variant="outlined"
            {...register("price")}
            style={{ marginBottom: 20, width: 400  }}
            required={true}
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
            label="Số trang"
            variant="outlined"
            {...register("page")}
            style={{ marginBottom: 20, width: 400  }}
          />
        </div>

        <div className="form-group">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Tác giả </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Tác giả"
                {...register("authorEntity.id")}
                onChange={(data)=>{
                  setValue("authorEntity.id", data)
                  console.log(data)
                  setAuthorInit(data.target.value)
                }}
                value={authorInit}
            >
              {authors && authors?.map((item)=>
                <MenuItem value={item.id}>{item.name}</MenuItem>
              )}
            </Select>
          </FormControl>
        </Box>
        </div>
        <br/>
        <div className="form-group">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label1">Chủ đề </InputLabel>
            <Select
                labelId="demo-simple-select-label1"
                id="demo-simple-select1"
                label="Chủ đề"
                {...register("topicEntity.id")}
                onChange={(data)=>{
                  setValue("topicEntity.id", data)
                  setTopicInit(data.target.value)
                }}
                value={topicInit}
            >
              {topics && topics?.map((item)=>
                  <MenuItem value={item.id}>{item.name}</MenuItem>
              )}
            </Select>
          </FormControl>
        </Box>
        </div>
        <br/>
        <Button variant="outlined" type="submit">
          Create
        </Button>
      </form>
    </Grid>
  );
}
