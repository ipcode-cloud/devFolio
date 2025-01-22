// import { motion } from 'framer-motion';
// import { useState, FormEvent } from 'react';

// const Contact = () => {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target as HTMLFormElement);

//     formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });

//       const data = await response.json();

//       if (data.success) {
//         setResult("Form Submitted Successfully");
//         (event.target as HTMLFormElement).reset();
//       } else {
//         console.log("Error", data);
//         setResult(data.message);
//       }
//     } catch (error) {
//       console.log("Error", error);
//       setResult("Something went wrong!");
//     }
//   };

//   return (
//     <section className="py-20 bg-[#13111C]" id="contact">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Have a question or want to work together? Feel free to reach out!
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="max-w-2xl mx-auto"
//         >
//           <form onSubmit={onSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-white mb-2">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 className="w-full px-4 py-3 bg-[#1E1B2C] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 placeholder="Your name"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-white mb-2">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="w-full px-4 py-3 bg-[#1E1B2C] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 placeholder="your@email.com"
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-white mb-2">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 required
//                 rows={6}
//                 className="w-full px-4 py-3 bg-[#1E1B2C] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
//                 placeholder="Your message..."
//               />
//             </div>

//             {/* Honeypot field to prevent spam */}
//             <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

//             <button
//               type="submit"
//               className="w-full py-3 px-6 rounded-lg text-white font-medium transition-colors bg-purple-600 hover:bg-purple-700"
//             >
//               Send Message
//             </button>

//             {result && (
//               <div className={`p-4 ${
//                 result === "Form Submitted Successfully"
//                   ? "bg-green-500/10 border border-green-500"
//                   : "bg-red-500/10 border border-red-500"
//               } rounded-lg`}>
//                 <p className={`text-center ${
//                   result === "Form Submitted Successfully"
//                     ? "text-green-500"
//                     : "text-red-500"
//                 }`}>
//                   {result}
//                 </p>
//               </div>
//             )}
//           </form>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
