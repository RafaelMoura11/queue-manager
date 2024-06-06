const Login = () => {
    return (
        <main>
            <section id="login">
                <div id="imagem">
                </div>
                <div id="formulario">
                    <h2>Bem vindo!</h2>
                    <h3>Faça login para se conectar: </h3>
                    <form>
                        <div className="campo">
                            <label htmlFor="email" className="label"> E-mail </label>
                            <input  type="email" className="input"  />
                        </div>
                        <div className="campo">
                            <label htmlFor="password" className="label"> Senha </label>
                            <input type="password" className="input" autoComplete="current-password" required minLength={ 8 } maxLength={ 20 }/>
                        </div>
                        <div id="senha">
                            <input type="checkbox" />
                            <label className="label" >Lembrar senha</label>
                        </div>
                        <div id="send">
                            <button type="submit">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Login;
