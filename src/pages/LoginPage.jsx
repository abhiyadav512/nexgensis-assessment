
import { Package, Lock, User, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('emilys');
    const [password, setPassword] = useState('emilyspass');

    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(login)
        try {
            await login(username.trim(), password.trim());
            navigate('/products')
        } catch (error) {
            console.log(error)
        }
    }

    const handleFillDemo = () => {
        setUsername('emilys');
        setPassword('emilyspass');
        setErrorMessage('');
    }

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-zinc-950 border border-zinc-700 overflow-hidden">
                <div className="bg-zinc-900 border-b border-zinc-800 p-6 text-center">
                    <div className="w-12 h-12 bg-black border border-zinc-700 flex items-center justify-center mx-auto mb-3">
                        <Package className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-white mb-1">ProductAdmin Login</h1>
                    <p className="text-zinc-400 text-xs">Sign in to manage store inventory</p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {errorMessage !== '' && (
                        <div className="flex items-center space-x-2 bg-red-950/60 border border-red-800 text-red-300 text-xs p-3">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">Username</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                                <User className="w-4 h-4" />
                            </div>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter username"
                                className="w-full pl-9 pr-3 py-2.5 bg-black border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                                <Lock className="w-4 h-4" />
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full pl-9 pr-3 py-2.5 bg-black border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full inline-flex items-center justify-center space-x-2 py-2.5 bg-white text-black font-semibold hover:bg-zinc-200 border border-white transition cursor-pointer text-sm disabled:opacity-50"
                    >
                        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                        <span>{isLoading ? 'Signing in...' : 'Sign In'}</span>
                    </button>

                    <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                        <span>Demo: <strong className="text-white">emilys</strong> / <strong className="text-white">emilyspass</strong></span>
                        <button
                            type="button"
                            onClick={handleFillDemo}
                            className="text-white underline hover:text-zinc-300 font-semibold cursor-pointer"
                        >
                            Fill Demo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
