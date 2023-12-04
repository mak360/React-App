import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

interface FormData {
  name: String;
  age: Number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          className="form-control"
          id="name"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Can't be empty</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Min 3 chars</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          type="number"
          className="form-control"
          id="age"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
