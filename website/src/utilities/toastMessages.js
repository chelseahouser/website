import { toast } from 'react-toastify';

export const success = () => toast.success("Message Sent!");
export const error = () => toast.error("Something went wrong.");
export const failedToLoadData = () => toast.error("Failed to load data from the server.");
export const missingRequiredFields = () => toast.error("Unable to send message. You are missing required fields.");
