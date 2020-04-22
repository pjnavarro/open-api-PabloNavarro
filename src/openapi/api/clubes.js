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
        }
    },
    '/api/clubes/{id}': {
        put: {
            security: [],
            summary: 'List clubes',
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    schema:{type: 'string'},
                    description: 'Modificar club solicitado',
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
                    description: 'list of clubes',
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


