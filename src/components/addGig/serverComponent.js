// import {useFormik} from "formik";
// import AddGig from "@/components/addGig/addGig";
// import {supabaseAdmin} from "@/app/page";
//
// export default function ServerComponent() {
//   const formik = useFormik({
//     initialValues: {
//       title: '',
//       description: '',
//       date: '',
//       time: '',
//       image: '',
//       artists: [],
//       ticket: '',
//       city: '',
//       location: '',
//       onlinePrice: '',
//       doorPrice: '',
//     },
//     onSubmit: async (values) => {
//       try {
//         const {data, error} = await supabaseAdmin.from('Event').insert(values)
//
//         if (error) {
//           throw error
//         }
//
//         console.log(data)
//         // Do something with the response data
//
//       } catch (error) {
//         console.error(error)
//         // Handle the error
//       }
//     },
//   })
//
//   return <AddGig formik={formik}/>
// }
