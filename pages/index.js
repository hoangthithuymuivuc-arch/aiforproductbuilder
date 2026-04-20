import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', phone: '', email: '' })
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <div className="antialiased overflow-x-hidden bg-tech-pattern">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-primary/80 backdrop-blur-md border-b border-accent/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src="/logo-am-ban.png" alt="Product Academy Logo" className="h-10 w-auto" />
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-accent transition-colors">Về khóa học</a>
            <a href="#audience" className="hover:text-accent transition-colors">Đối tượng</a>
            <a href="#trainers" className="hover:text-accent transition-colors">Giảng viên</a>
            <a href="#register" className="text-accent hover:text-white transition-colors">Đăng ký</a>
          </nav>
          <a href="#register" className="bg-accent text-primary px-6 py-2 rounded-full font-bold text-sm glow-btn hidden md:flex items-center gap-2">
            ĐĂNG KÝ NGAY
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-block border border-accent/50 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide bg-accent/10">
              KHAI GIẢNG: 09/05/2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              KHÓA HỌC <br />
              <span className="text-accent glow-text inline-flex items-center gap-2 md:gap-4 flex-wrap">
                AI FOR PRODUCT BUILDERS
                <svg className="w-10 h-10 md:w-12 md:h-12 animate-pulse shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"></path></svg>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
              Tư duy Product để <span className="text-white font-bold border-b-2 border-accent">xây đúng</span> - Ứng dụng AI để <span className="text-white font-bold border-b-2 border-accent">xây nhanh</span>
            </h2>
            <p className="text-grayish text-lg mb-8 leading-relaxed">
              Đừng chỉ build nhanh, hãy build đúng. Khóa học giúp bạn hiểu tư duy Product cốt lõi và biết cách dùng AI để đi từ Ý tưởng → Phạm vi MVP → Prototype/MVP cơ bản chỉ trong 3 tuần.
            </p>
            
            <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0 mb-10">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="text-gray-200">Chọn đúng vấn đề và đúng người dùng.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="text-gray-200">Chốt đúng tính năng cốt lõi trước khi build.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="text-gray-200">Dùng AI để tăng tốc quá trình đặc tả, thiết kế và dựng nguyên mẫu.</span>
              </li>
            </ul>

            <a href="#register" className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg glow-btn text-center flex items-center justify-center gap-2 max-w-md mx-auto lg:mx-0">
              ĐĂNG KÝ TƯ VẤN NGAY
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </a>
          </div>
          
          <div className="lg:w-2/5 w-full max-w-md">
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[30px]"></div>
              <h3 className="text-2xl font-bold mb-6 text-white">Thông tin cơ bản</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-grayish font-medium">Khai giảng</p>
                    <p className="font-bold text-lg">09/05/2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-grayish font-medium">Hình thức</p>
                    <p className="font-bold text-lg">Online qua Zoom</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-grayish font-medium">Thời lượng</p>
                    <p className="font-bold text-lg">03 tuần <span className="text-sm font-normal text-grayish block">(4 buổi sáng + 1 ngày Build Day)</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-grayish font-medium">Công cụ AI</p>
                    <p className="font-bold text-lg">Antigravity, Stitch, Google AI Studio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section id="audience" className="py-20 bg-darker relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CHÂN DUNG <span className="text-accent">HỌC VIÊN</span></h2>
            <p className="text-grayish max-w-2xl mx-auto">Khóa học được thiết kế đặc biệt dành cho những người muốn ứng dụng AI để tối ưu hóa quy trình phát triển sản phẩm công nghệ.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Product Owner / Product Manager', desc: 'Muốn hệ thống lại tư duy, cách làm, công cụ và dùng AI tăng tốc quy trình.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { title: 'BA, Marketing, Growth, CX, UX', desc: 'Muốn chuyển đổi mượt mà insight khách hàng thành logic cấu trúc sản phẩm.', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
              { title: 'Founder startup, Solopreneur', desc: 'Muốn dùng sức mạnh của AI để tạo sản phẩm nhanh hơn nhưng vẫn đi đúng hướng.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'Kỹ sư công nghệ, Tech Lead', desc: 'Nâng cao tư duy sản phẩm, thấu hiểu người dùng thay vì chỉ tập trung vào code.', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-grayish text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative overflow-hidden bg-[#020717]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0yMCAyMGMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6bTAgMTVjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyeiIgZmlsbD0iI2ZmNzFmOSIgZmlsbC1vcGFjaXR5PSIwLjAyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12 border-accent/30 shadow-[0_0_50px_rgba(255,113,249,0.15)] text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              <h2 className="text-3xl md:text-5xl font-black mb-4">CHÍNH SÁCH <span className="text-accent glow-text">HỌC PHÍ</span></h2>
              <p className="text-grayish mb-10">Đầu tư một lần, trang bị bộ kỹ năng Product & AI đi cùng bạn suốt sự nghiệp.</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div className="text-center opacity-70">
                  <p className="text-lg text-grayish font-medium mb-1">Học phí gốc</p>
                  <div className="text-3xl font-bold line-through decoration-red-500 decoration-2">6.000.000đ</div>
                </div>
                <div className="hidden md:block w-px h-20 bg-accent/20"></div>
                <div className="text-center transform md:scale-110">
                  <div className="inline-flex items-center gap-1.5 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full mb-2 animate-pulse">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path></svg>
                    ƯU ĐÃI EARLY BIRD
                  </div>
                  <div className="text-5xl font-black text-accent glow-text mb-2">4.500.000đ</div>
                  <p className="text-sm text-grayish">(Áp dụng từ ngày 03-10/...)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register Form */}
      <section id="register" className="py-16 relative overflow-hidden bg-darker">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-darker to-primary"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-lg mx-auto">
            <div className="bg-[#030e2a] rounded-2xl p-8 border border-pink-500 shadow-[0_0_30px_rgba(255,113,249,0.2)]">
              <h3 className="text-2xl font-bold text-center mb-6 text-white">ĐĂNG KÝ GIỮ CHỖ NGAY</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input type="text" required placeholder="Họ và tên" value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-pink-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors" />
                </div>
                <div>
                  <input type="tel" required placeholder="Số điện thoại" value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-pink-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors" />
                </div>
                <div>
                  <input type="email" required placeholder="Email" value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-pink-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors" />
                </div>
                <button type="submit" disabled={status === 'loading'}
                  className={`w-full py-3 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-colors ${status === 'success' ? 'bg-green-500 text-white' : status === 'error' ? 'bg-red-500 text-white' : 'bg-pink-500 text-white hover:bg-pink-600'}`}>
                  {status === 'loading' && (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
                  )}
                  {status === 'success' ? 'ĐÃ ĐĂNG KÝ THÀNH CÔNG!' : status === 'error' ? 'GỬI THẤT BẠI' : 'ĐĂNG KÝ GIỮ CHỖ NGAY'}
                </button>
              </form>
              <p className="text-xs text-gray-500 text-center mt-4">* Số lượng học viên giới hạn để đảm bảo chất lượng hướng dẫn 1-1 trong ngày Build Day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-accent/10 py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-grayish">&copy; 2026 Product Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
