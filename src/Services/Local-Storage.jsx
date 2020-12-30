import React from 'react';

export class LocalStorageDataService
{
    constructor (){
        function setStorageData(storageKey, storageValue, isJSON)
        {
            if(isJSON===true)
            {
                localStorage.setItem(storageKey, JSON.stringify(storageValue));
            }
        }
        function getStorageData(storageKey, isJSON)
        {
            let data= localStorage.getItem(storageKey);
            if(isJSON===true)
            {
                return JSON.parse(data);
            }
            else return data;
        }
        function clearStorageData(storageKey)
        {
            localStorage.removeItem(storageKey);
        }
    }
}