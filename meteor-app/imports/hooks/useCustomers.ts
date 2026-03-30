import { useEffect, useState } from "react";
import { Meteor } from "meteor/meteor";

interface Customer {
    id: number;
    full_name: string;
    position: string;
}

export const useCustomers = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        Meteor.call("getCustomers", (err, result: Customer[]) => {
            if (err) {
                console.error("Ошибка при загрузке клиентов:", err);
            } else {
                setCustomers(result);
            }
        });
    }, []);

    return customers;
};