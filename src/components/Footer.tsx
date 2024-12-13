import { ErrorMessage, Field, Form, Formik } from "formik"
import CleverImg from "../assets/photo_2024-04-26_18-23-06-removebg-preview 1.png"
import { Button } from "./shared"
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
export default function Footer() {
    return (
        <div className="w-full bg-[var(--black)] p-6" id="Contact-Us">
            <div className="m-auto container">
                <div>
                    <img src={CleverImg} className="w-16" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 py-6 sm:py-4 gap-y-10 sm:gap-6">
                    <div className="flex flex-col items-center sm:items-start">
                        <div className=" font-bold text-lg">ABOUT COMPANY</div>
                        <div className="py-4 text-sm text-gray-400 text-center sm:text-left">Sapien luctus lesuada sentus pharetra nisi quisuea aenean eros mus magnis arcu vehicula nascetur feugiat</div>
                        <div className="flex gap-2">
                            <div className="size-8 flex justify-center items-center bg-[var(--gray)] rounded-2xl">
                                <TwitterOutlined/>
                            </div>
                            <div className="size-8 flex justify-center items-center bg-[var(--gray)] rounded-2xl">
                                <FacebookOutlined/>
                            </div>
                            <div className="size-8 flex justify-center items-center bg-[var(--gray)] rounded-2xl">
                                <InstagramOutlined/>
                            </div>
                            <div className="size-8 flex justify-center items-center bg-[var(--gray)] rounded-2xl">
                                <LinkedinOutlined />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <div className=" font-bold text-lg">Our Services</div>
                        <ul className="flex flex-col items-center sm:items-start gap-1 py-4 text-sm text-gray-400">
                            <li>Online class</li>
                            <li>Baby care</li>
                            <li>Shop</li>
                            <li>Kids Playzone</li>
                            <li>Nurse</li>
                        </ul>
                    </div>
                    <div className=" flex flex-col items-center sm:items-start">
                        <div className=" font-bold text-lg">Useful links</div>
                        <ul className="flex flex-col items-center sm:items-start gap-1  py-4 text-sm text-gray-400">
                            <li>Online class</li>
                            <li>Baby care</li>
                            <li>Shop</li>
                            <li>Kids Playzone</li>
                            <li>Nurse</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 items-center sm:items-start">
                        <div className=" font-bold text-lg">ABOUT COMPANY</div>
                        <div className="flex flex-col gap-1 text-sm text-gray-400 text-center sm:text-left">Sapien luctus lesuada sentus pharetra nisi quisuea aenean eros mus magnis arcu vehicula nascetur feugiat</div>
                        <Formik
                            initialValues={{ email: ''}}
                            validate={(values: {email:string}) => {
                                const errors: { [key: string]: string } = {};
                                if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) && !values.email
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                try {
                                    console.log(values);
                                    alert("success")
                                }
                                catch (error) {
                                    console.log(error);
                                    alert(error)
                                }
                                finally {
                                    setSubmitting(false);
                                }
                            }}
                        >
                             {({ isSubmitting }) => (
                                <Form className='w-full flex flex-col items-center sm:items-start'>
                                    <Field type="email" name="email" placeholder="Your email" className=" w-full border-[0.1rem] border-[var(--gray)] bg-transparent hover:bg-[var(--gray)] outline-none px-5 "/>
                                    <ErrorMessage name="email" component="div" className=' text-red-600 font-semibold'/>
                                    <Button type="submit" disabled={isSubmitting} className=" mt-3 bg-[var(--orange-1)] outline-none active:outline-1 active:outline-[var(--orange)] rounded-none">Subscribe</Button>
                                </Form>
                             )}
                        </Formik>
                    </div>
                </div>
                <div className=" w-full pt-5 flex flex-col items-center text-gray-400">
                    <hr className="w-full bg-gray-400" />
                    <div className="pt-5">@copyright 2023 all right reserved by titan construction</div>
                </div>
            </div>
        </div>
    )
}
