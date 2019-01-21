new fullpage('#myContainer', {
    slidesNavigation: true,
    fadingEffect: true,
    fadingEffectKey: 'YWx2YXJvdHJpZ28uY29tXzAzN1ptRmthVzVuUldabVpXTjBiNXo='
});

document.getElementById('turnOn').addEventListener('click', function() {
    fullpage_api.fadingEffect.turnOn();
});

document.getElementById('turnOff').addEventListener('click', function() {
    fullpage_api.fadingEffect.turnOff();
});