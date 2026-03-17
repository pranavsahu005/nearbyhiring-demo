import React from "react";
import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { CreditCard, RefreshCcw, ShieldCheck, AlertCircle, Calendar, Receipt, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Payment & Refund Policy Page
 * High-density layout with professional cards and binding clauses.
 */
const PaymentRefund = () => {
  const { language, t } = useLanguage();
  useScrollReveal();

  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "भुगतान और धनवापसी" : "Payment and Refund"}
        subtitle={language === 'hi' ? "Payment & Refund Policy" : "Payment & Refund Policy"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "Refund Policy" : "Refund Policy"}
      />
      
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center" data-reveal>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 italic uppercase">
                Payment & <span className="text-blue-600">Refund Policy</span>
              </h1>
              <p className="text-slate-500 font-black italic tracking-widest uppercase text-xs">Version 2.1: July 01, 2025</p>
            </div>

            <div className="grid gap-8">
              <section className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 shadow-sm">
                    <CreditCard className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">Financial Commitment</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-bold italic text-sm space-y-4">
                  <p>
                    By enrolling in any physical, hybrid, or online training course at Eduskill Group, you agree to these payment terms. Fees may vary based on location and contractual arrangements.
                  </p>
                  <div className="bg-blue-premium p-8 rounded-3xl text-white italic text-base font-black shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
                    <p className="relative z-10 leading-tight">
                        "You authorize Eduskill Employment Division or its third-party providers (E.g. Razorpay / CCAvenue) to store and access your payment information for transactions."
                    </p>
                  </div>
                </div>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <section className="bg-white p-8 md:p-10 rounded-[3.5rem] shadow-xl border border-slate-100" data-reveal>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
                            <RefreshCcw className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 uppercase italic">Cancellation Window</h3>
                    </div>
                    <p className="text-slate-500 font-bold italic text-sm leading-relaxed mb-6">
                        Cancel anytime via your Career Dashboard. For subscriptions, cancellation must be made 48 hours before the next billing cycle.
                    </p>
                    <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-400">
                        <Calendar className="h-4 w-4" />
                        Standard 48-Hour Notice
                    </div>
                </section>

                <section className="bg-white p-8 md:p-10 rounded-[3.5rem] shadow-xl border border-slate-100" data-reveal>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-green-50 rounded-xl text-green-600">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 uppercase italic">Eligibility Matrix</h3>
                    </div>
                    <p className="text-slate-500 font-bold italic text-sm leading-relaxed mb-6">
                        We offer a 2-day partial refund window from the procurement date or completion of Module 1. Professional fees are non-refundable after certification start.
                    </p>
                </section>
              </div>

              <section className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-red-50 rounded-2xl text-red-600 shadow-sm">
                    <AlertCircle className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">Binding Clauses</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    "No partial usage refunds",
                    "Limit 1 refund per course",
                    "3rd party market rules apply",
                    "15-day notice for fee changes"
                  ].map((note, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border-t-4 border-red-500 font-black italic uppercase text-[10px] tracking-widest text-slate-600 flex flex-col justify-between items-center text-center shadow-sm">
                        <AlertCircle className="h-4 w-4 mb-2 text-red-500 opacity-20" />
                        {note}
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-blue-premium p-12 rounded-[3.5rem] shadow-2xl text-center text-white overflow-hidden relative" data-reveal>
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px]" />
                <div className="relative z-10">
                    <div className="p-3 bg-white/10 rounded-full inline-flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-widest mb-6 border border-white/5">
                        <Receipt className="h-4 w-4 text-blue-400" />
                        Verified Billing Support
                    </div>
                    <p className="text-xl font-bold mb-8 opacity-80 leading-tight italic">
                        Inquiries regarding payment reconciliation or chargebacks?
                    </p>
                    <a 
                    href="mailto:info@eduskill.org?subject=Subscription" 
                    className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 text-white font-black uppercase italic tracking-widest rounded-2xl hover:bg-white hover:text-blue-600 transition-all text-sm shadow-xl"
                    >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    billing@eduskill.org
                    </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentRefund;
