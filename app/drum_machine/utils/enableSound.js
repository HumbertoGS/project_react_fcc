export const enableSound = (idKey, parentId, power, msg, vol) => {
    const newStr = parentId?.replace(/-/g, " ");
    if (power) msg(newStr);
  
    const audio = document.getElementById(idKey);
    audio.volume = vol / 100;
    audio.play();
  
    const parentStyle = document.getElementById(parentId);
    parentStyle?.classList.add("btnStyleActive");
  
    setTimeout(() => {
      parentStyle?.classList.remove("btnStyleActive");
    }, 200);
  };
  