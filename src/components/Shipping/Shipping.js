import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css'


const Shipping = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { user } = useAuth();

    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;
        console.log(data)

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed successffully!');
                    clearTheCart();
                    reset();
                }
            })
    };
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("Name")} />


                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("Address")} />
                <input placeholder="City" defaultValue="" {...register("City")} />
                <input placeholder="Phone" defaultValue="" {...register("Phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;