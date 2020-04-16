module.exports = {
    '/api/clubes': {
        get: {
            security: [],
            summary: 'List clubes',
            parameters: [
                {
                    in: 'query',
                    name: 'code',
                    schema:{type: 'string',
                    pattern: '^[A-Z]{2}$'},
                    description: 'Código de club solitado',
   
                }                                   
            ],
            responses: {
                200: {
                    description: 'list of clubes',
                    content:{
                        'application/json':{
                            schema:{
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties:{
                                        id:{
                                            type:'string',
                                            format: 'uuid'
                                        },
                                        name:{type: 'string'}
                                    }
                                } 
                            }
                        }
                    }
                },
                default:{
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },
        put: {
            security: [],
            summary: 'List clubes',
            parameters: [
                {
                    in: 'query',
                    name: 'code',
                    schema:{type: 'string'},
                    description: 'Modificar club solicitado'
                    
                }                                   
            ],
            responses: {
                200: {
                    description: 'list of clubes',
                    content:{
                        'application/json':{
                            schema:{
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties:{
                                        id:{
                                            type:'string',
                                            format: 'uuid'
                                        },
                                        name:{type: 'string'}
                                    }
                                } 
                            }
                        }
                    }
                },
                default:{
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        }
    }
};

