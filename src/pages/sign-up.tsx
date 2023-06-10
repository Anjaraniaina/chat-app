import React from 'react';
import {SignUp} from "@/components";
import Protected from "@/components/Protected";

const SignUpPage = () => {
  return (
    <div className={"container-fluid "}>
        <Protected>
            <SignUp />
        </Protected>
    </div>
  );
};

export default SignUpPage;