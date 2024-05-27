import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  return (
    <div className="ml-20 mt-20 text-base	">
      <h2 className="text-5xl font-bold mb-4 text-center">Registro</h2>
      <p className='text-center'>De manera gratuita y accede a nuestros contenidos exclusivos</p>
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          address: '',
          zipCode: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required('El nombre es requerido'),
          lastName: Yup.string()
            .required('El apellido es requerido'),
          email: Yup.string()
            .email('Formato de email inválido')
            .required('El email es requerido'),
          address: Yup.string()
            .required('La direccion es requida'),
          zipCode: Yup.string()
          .required('El codigo postal es requido'),
          password: Yup.string()
            .min(6, 'La contraseña debe tener al menos 6 caracteres')
            .required('La contraseña es requerida'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
            .required('Debes confirmar la contraseña')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 mt-10">
            <div>
              <Field type="email" name="email" id="email" placeholder="Email" className=" p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>
            <div className='flex'>
              <div className="flex-auto">
                <Field type="text" name="firstName" id="firstName" placeholder="Nombre" className="p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="flex-auto mx-3">
                <Field type="text" name="lastName" id="lastName" placeholder="Apellido" className="p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            <div className='flex'>
              <div className="flex-auto">
                <Field type="text" name="address" id="address" placeholder="Direccion" className="p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="flex-auto mx-3">
                <Field type="text" name="zipCode" id="zipCode" placeholder="Codigo Postal" className="p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <ErrorMessage name="zipCode" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            <div className='flex'>
              <div className="flex-auto">
                <Field type="password" name="password" id="password" placeholder="Contraseña" className="p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="flex-auto mx-3">
                <Field type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmar contraseña" className="p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            <div >
              <button type="submit" className="mt-20 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-400 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600" disabled={isSubmitting}>
                Registrarse
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;