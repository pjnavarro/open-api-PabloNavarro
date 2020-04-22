module.exports = {
    '/api/provinces': {
        get: {
            security: [],
            summary: 'List provinces',
            parameters: [
                {
                    in: 'query',
                    name: 'code',
                    schema:{type: 'string',
                    pattern: '^[A-Z]{2}$'},
                    description: 'Código de provinces solitado',
   
                }                                   
            ],
            responses: {
                200: {
                    description: 'list of provinces',
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
    },
    '/api/provinces/{id}': {
        put: {
            security: [],
            summary: 'List provinces',
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    schema:{type: 'string'},
                    description: 'Modificar provinces solicitado',
                    required: true
                }
            ],
            requestBody: {
                description: 'Optional description in Markdown',
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                name: {type: 'string'},
                                id: {
                                    type: 'string',
                                    nullable: true
                                }
                            }

                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'list of provinces',
                    content:{
                        'application/json':{
                            schema:{
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties:{
                                        code:{
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
    },
};  


