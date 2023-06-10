import React from 'react';
import Protected from "@/components/Protected";

const MessagePage = () => {
  return (
      <Protected>
          <div>
              Message Page
          </div>
      </Protected>
  );
};

export default MessagePage;