using System;
using System.Collections.Generic;
using System.Text;
using DotBPE.Rpc.Codes;

namespace DotBPE.Rpc {
    public interface IAuditLoggerFormat<in TMessage> where TMessage : InvokeMessage {
        string Format (IRpcContext context, AuditLogType logType, TMessage req, TMessage rsp, long elapsedMS);
    }

    public enum AuditLogType {
        CACAduit = 1,
        RequestAudit = 2,
    }
}