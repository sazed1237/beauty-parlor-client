import React from 'react';

const Loading = () => {
    return (
        <div>
            <span className="loading loading-ring text-secondary loading-xs"></span>
            <span className="loading loading-ring text-secondary loading-sm"></span>
            <span className="loading loading-ring text-secondary loading-md"></span>
            <span className="loading loading-ring text-secondary loading-lg"></span>
        </div>
    );
};

export default Loading;