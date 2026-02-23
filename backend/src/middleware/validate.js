export const validateBody = (schema) => {
            return (req, res, next) => {
                        const { error, value } = schema.validate(req.body, {
                                    abortEarly: false,
                                    stripUnknown: true, // remove extra fields
                        });

                        if (error) {
                                    return res.status(400).json({
                                                errors: error.details.map(err => err.message),
                                    });
                        }

                        req.body = value; 
                        next();
            };
}; 

export const validateParams = (schema) => {
            return (req, res, next) => {
                        const { error, value } = schema.validate(req.params, {
                                    abortEarly: false,
                                    stripUnknown: true,
                        });

                        if (error) {
                                    return res.status(400).json({
                                                errors: error.details.map(err => err.message),
                                    });
                        }

                        req.params = value; // sanitized params
                        next();
            };
};