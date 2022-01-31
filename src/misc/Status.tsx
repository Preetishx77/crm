import * as React from 'react';
import { Box } from '@material-ui/core';

const getColorFromStatus = (status: string) =>
    status === 'closed'
        ? '#7dbde8'
        : status === 'payment pending'
        ? '#e8cb7d'
        : status === 'halt'
        ? '#e88b7d'
        : status === 'in-contract'
        ? '#a4e87d'
        : '#000';

export const Status = ({ status }: { status: string }) => (
    <Box
        width={10}
        height={10}
        display="inline-block"
        borderRadius={5}
        bgcolor={getColorFromStatus(status)}
        component="span"
    />
);
