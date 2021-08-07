module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const body = req.body;
    context.log({body});

    context.res.json({
        valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
    });
}