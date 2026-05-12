import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Skip auth as per requirements
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] relative overflow-hidden font-sans">
            {/* Soft Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[100%] sm:w-[60%] h-[60%] bg-blue-100/50 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[100%] sm:w-[60%] h-[60%] bg-indigo-100/50 rounded-full blur-[140px]"></div>
            </div>

            <div className="w-full max-w-[400px] relative z-10 mx-4">
                {/* Logo Section - More Compact */}
                <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">

                    <div>
                        <h1 className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">Recruitement</h1>
                        <p className="text-slate-500 text-[11px] font-medium mt-0.5">Evaluation Platform</p>
                    </div>
                </div>

                {/* Login Card - Reduced padding and spacing */}
                <div className="bg-white rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 p-6 sm:p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="mb-6">
                        <h2 className="text-lg font-bold text-slate-800">Welcome Back</h2>
                        <p className="text-slate-500 text-xs mt-0.5">Please enter your credentials to continue.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                    <FiMail size={16} />
                                </div>
                                <input
                                    type="email"
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-400 text-sm"
                                    placeholder="admin@recruiter.ai"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Password</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                    <FiLock size={16} />
                                </div>
                                <input
                                    type="password"
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-400 text-sm"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group mt-2 text-sm"
                        >
                            Sign In
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;