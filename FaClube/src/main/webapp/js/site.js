function validaFaleConosco(){
	var nome = document.frmfaleconosco.txtnome.value;
	var expRegNome = new RegExp("^[A-zÀ-ú]{3,}( [A-zÀ-ú]{2,})+$");
	
	if (!expRegNome.test(nome)) {
	    alert("Preencha o campo nome corretamente");
	    document.frmfaleconosco.txtnome.focus();
	    return false;
	}

	var fone = document.frmfaleconosco.txtfone.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	
	if (!expRegFone.test(fone)) {
	    alert("Preencha o campo telefone corretamente");
	    document.frmfaleconosco.txtfone.focus();
	    return false;
	}
	if(document.frmfaleconosco.txtemail.value==""){
		alert("Preencha o campo e-mail.");
		document.frmfaleconosco.txtemail.focus();
		return false;	
	}
	if(document.frmfaleconosco.txacomentario.value==""){
		alert("Preencha o campo comentário.");
		document.frmfaleconosco.txacomentario.focus();
		return false;	
	}
	return true;
}