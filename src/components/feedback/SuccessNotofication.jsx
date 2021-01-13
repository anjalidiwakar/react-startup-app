import { notification } from 'antd';

function SuccessNotification(message, description) {
    notification.open({
        message: message,
        description:
            description
       
    });
}

export default SuccessNotification;