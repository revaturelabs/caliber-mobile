import React, {FC, useState, FormEvent, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';

import Input from '../UI/Input';
import Button from '../UI/Button';
import Message from '../UI/Message';
import {getUser} from '../store/actions';
import {RootState} from '../store/store';

const ForgotPassword: FC = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const {user} = useSelector((state: RootState) => state.userReducer);

    useEffect(() => {
        return () => {
            if (user){
                dispatch(getUser(user));
            }
        }
    }, [user, dispatch]);

    const submitHandler = async (e:FormEvent) => {
        e.preventDefault();
        await dispatch(sendPasswordResetEmail(email, "Email Sent!"));
        setLoading(false);
    }

    return (
        <section className="section">
            <div className="container">
                <h2 className = "has-text-centered is-size-2 mb-3">Reset Password</h2>
                <form className="form" onSubmit={submitHandler} >
                    {error && <Message type="danger" msg={error}/>}
                    {success && <Message type="success" msg={success}/>}
                    <Input
                        type="email"
                        name = "email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        placeholder="Email address"
                        label="Email address"
                    />
                    <Button text={loading ? "Loading..." : "Send Password Rest Email"} className="is-primary is-fullwidth mt-5" disabled={loading} />
                </form>
            </div>
        </section>
    );
}

export default ForgotPassword;