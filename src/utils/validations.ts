
export const validateUUID = (uuid: string): boolean => {
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(uuid);
  };

  export const validateInteger = (value: any): boolean => {
    return Number.isInteger(value);
  };
  
  export const validateBase64 = (data: string): boolean => {
    // Expressão regular para verificar se o string é base64
    const base64Regex = /^(?:[A-Za-z0-9+/]{4}){1,}(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
    return base64Regex.test(data);
  };
  