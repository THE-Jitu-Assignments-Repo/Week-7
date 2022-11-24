import * as yup from 'yup';

export const validateProductSchema = (product) => {
  const schema = yup.object().shape({
    title: yup.string().required(),
    image: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
    discount: yup.number().required()
  })
  return schema.validate(product);
} 