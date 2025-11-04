import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  X,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import useTaskStore from "../store/taskStore";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

export default function AuthForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const { backendURL, setToken } = useTaskStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!isSignIn && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!isSignIn) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      if (!formData.agree) {
        newErrors.agree = "You must agree to the terms and conditions";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const payload = isSignIn
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.password,
          };

      const res = await axios.post(
        `${backendURL}/api/auth/${isSignIn ? "login" : "register"}`,
        payload
      );

      if (res.data.success) {
        setToken(res.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      setServerError(errorMessage);

      setTimeout(() => {
        setServerError("");
      }, 5000);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      const idToken = credentialResponse.credential;

      try {
        const res = await axios.post("/api/auth/google-login", {
          token: idToken,
        });

        if (res.data.success) {
          setToken(res.data.token);
          navigate("/dashboard");
        }
      } catch (error) {
        console.error(
          "Google login failed:",
          error.response?.data || error.message
        );
      }
    },
    onError: () => {
      console.error("Google login failed");
    },
    flow: "implicit",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-10">
      {/* Toast-like Server Error */}
      {serverError && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
          <div className="bg-red-500/90 backdrop-blur-lg text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 max-w-md">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium flex-1">{serverError}</p>
            <button
              onClick={() => setServerError("")}
              className="text-white/80 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-md">
        {/* Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 space-y-8 transition-all duration-300">
          {/* Header */}
          <div className="space-y-2 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              {isSignIn ? (
                <Lock className="w-6 h-6 text-white" />
              ) : (
                <User className="w-6 h-6 text-white" />
              )}
            </div>
            <h1 className="text-3xl font-bold text-white">
              {isSignIn ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-slate-300 text-sm">
              {isSignIn
                ? "Enter your credentials to access your account"
                : "Join us today and get started"}
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Full Name - Sign Up Only */}
            {!isSignIn && (
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full bg-white/5 border ${
                      errors.name ? "border-red-400" : "border-white/10"
                    } rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>
            )}

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full bg-white/5 border ${
                    errors.email ? "border-red-400" : "border-white/10"
                  } rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition`}
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full bg-white/5 border ${
                    errors.password ? "border-red-400" : "border-white/10"
                  } rounded-lg pl-10 pr-10 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password - Sign Up Only */}
            {!isSignIn && (
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className={`w-full bg-white/5 border ${
                      errors.confirmPassword
                        ? "border-red-400"
                        : "border-white/10"
                    } rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition`}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.confirmPassword}
                  </p>
                )}
                {!errors.confirmPassword &&
                  formData.confirmPassword &&
                  formData.password === formData.confirmPassword && (
                    <p className="text-green-400 text-xs mt-1 flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Passwords match
                    </p>
                  )}
              </div>
            )}

            {/* Remember & Forgot - Sign In Only */}
            {isSignIn && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-slate-300 hover:text-white cursor-pointer transition">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-white/20 bg-white/5 mr-2"
                  />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Forgot password?
                </a>
              </div>
            )}

            {/* Terms - Sign Up Only */}
            {!isSignIn && (
              <div>
                <label className="flex items-start text-slate-300 hover:text-white cursor-pointer transition text-sm">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className={`w-4 h-4 rounded border-white/20 bg-white/5 mr-2 mt-0.5 ${
                      errors.agree ? "border-red-400" : ""
                    }`}
                  />
                  I agree to the Terms of Service and Privacy Policy
                </label>
                {errors.agree && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1 ml-6">
                    <AlertCircle className="w-3 h-3" />
                    {errors.agree}
                  </p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mt-6"
            >
              {isSignIn ? "Sign In" : "Create Account"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-slate-400">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleGoogleLogin}
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white py-2 rounded-lg transition font-medium text-sm"
            >
              Google
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white py-2 rounded-lg transition font-medium text-sm">
              GitHub
            </button>
          </div>

          {/* Toggle Sign In / Sign Up */}
          <div className="text-center space-y-3">
            <p className="text-slate-400 text-sm">
              {isSignIn
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={() => {
                  setIsSignIn(!isSignIn);
                  setErrors({});
                  setServerError("");
                }}
                className="text-blue-400 cursor-pointer hover:text-blue-300 font-semibold transition"
              >
                {isSignIn ? "Sign up" : "Sign in"}
              </button>
            </p>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-slate-400 text-xs">
                  or
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                navigate("/dashboard");
                window.scrollTo(0, 0);
              }}
              className="w-full cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white py-2 rounded-lg transition font-medium text-sm"
            >
              Continue as Guest
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-400 text-xs space-y-2">
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-slate-200 transition">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-200 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
